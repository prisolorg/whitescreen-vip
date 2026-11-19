"""List every link to the homepage in dist/ with its anchor text, and bucket them.
Usage: python3 home_anchors.py <dist dir> [--en-only] [--json out.json] [--list]"""
import os, re, sys, json, html
from html.parser import HTMLParser
from collections import Counter

HOME = {'/', 'https://whitescreen.vip/', 'https://whitescreen.vip'}
LOCALES = {'de','es','fr','it','pt-br','tr','ja','ko','ru','pl','nl','id','vi','hi','ar','zh','zh-cn','zh-tw','th','sv','uk','cs','ro','hu'}

class P(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True); s.stack=[]; s.links=[]; s.ctx=[]
    def handle_starttag(s, tag, attrs):
        a=dict(attrs)
        if tag in ('header','footer','nav','aside','main'): s.ctx.append(tag)
        if tag=='a':
            s.stack.append({'href':a.get('href',''),'text':[],'alt':[],'aria':a.get('aria-label'),'ctx':'>'.join(s.ctx) or 'body'})
        elif s.stack and tag in ('img',): s.stack[-1]['alt'].append(a.get('alt') or '')
        elif s.stack and tag=='svg' and a.get('aria-label'): s.stack[-1]['alt'].append(a['aria-label'])
    def handle_endtag(s, tag):
        if tag in ('header','footer','nav','aside','main') and s.ctx and s.ctx[-1]==tag: s.ctx.pop()
        if tag=='a' and s.stack: s.links.append(s.stack.pop())
    def handle_data(s, d):
        for l in s.stack: l['text'].append(d)

def bucket(t):
    x=t.lower().strip(); x=re.sub(r'[→›»]','',x).strip()
    if not x: return 'empty'
    if 'whitescreen.vip' in x or 'whitescreen vip' in x: return 'branded'
    if x in ('home','open the tool','launch fullscreen','go to the tool','back to the tool','homepage','home page'): return 'generic'
    if x=='white screen': return 'exact'
    return 'partial'

def main():
    root=sys.argv[1]; en='--en-only' in sys.argv
    rows=[]
    for dp,_,fs in os.walk(root):
        for f in fs:
            if f!='index.html': continue
            p=os.path.join(dp,f); page='/'+os.path.relpath(dp,root).replace('\\','/')+'/'
            page=page.replace('/./','/')
            if page=='/./': page='/'
            first=page.strip('/').split('/')[0]
            if en and first in LOCALES: continue
            s=open(p,encoding='utf-8',errors='ignore').read()
            if 'http-equiv="refresh"' in s[:2000]: continue
            pr=P(); pr.feed(s)
            for l in pr.links:
                if l['href'] in HOME:
                    t=re.sub(r'\s+',' ',''.join(l['text'])).strip()
                    if not t: t=' '.join(x for x in l['alt'] if x).strip() or (l['aria'] or '')
                    rows.append({'page':page,'ctx':l['ctx'],'anchor':t,'bucket':bucket(t)})
    c=Counter(r['bucket'] for r in rows); n=len(rows)
    print(f'pages scanned (en-only={en}); homepage links: {n}')
    for b in ['branded','exact','partial','generic','empty']:
        print(f'  {b:8} {c[b]:6}  {100*c[b]/n if n else 0:5.1f}%')
    print('top anchors:')
    for (a,k),v in Counter((r['anchor'][:70],r['ctx']) for r in rows).most_common(25): print(f'  {v:5}  [{k}] {a}')
    if '--json' in sys.argv: json.dump(rows,open(sys.argv[sys.argv.index('--json')+1],'w'),indent=1)
main()
