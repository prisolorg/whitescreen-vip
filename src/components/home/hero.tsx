import { cn } from "@/lib/utils";
import { ScreenTool } from "@/components/screen-tool/screen-tool";
import { ScreenStudio } from "@/components/screen-studio/screen-studio";
import { usesStudioLayout } from "@/lib/studio-layout";
import { TryNextGallery } from "@/components/try-next-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { InlineAd, ToolWithAds } from "@/components/tool-ads";
import { COLOR_HUB_NAMES } from "@/lib/hubs";
import { useTranslation } from "@/lib/i18n";

type HeroProps = {
  colorId?: string;
  title?: string;
  intro?: string;
};

export function Hero({ colorId = "white", title, intro }: HeroProps) {
  const { t, language } = useTranslation();

  const defaultTitle =
    colorId === "white"
      ? t("heroTitle", "White Screen")
      : `${t(colorId, colorId.charAt(0).toUpperCase() + colorId.slice(1))} ${t("colorScreenSuffix", "Screen")}`;

  return (
    <section
      id="tool"
      aria-labelledby="screen-heading"
      className={
        usesStudioLayout(colorId)
          ? "scroll-mt-16 pb-8"
          : "scroll-mt-16 pb-8 pt-3 sm:pt-4"
      }
    >
      <div
        data-wide-page={usesStudioLayout(colorId) ? "" : undefined}
        data-compact-header={usesStudioLayout(colorId) ? "" : undefined}
        className={cn(
          "mx-auto flex flex-col gap-3 px-3 sm:px-6",
          usesStudioLayout(colorId) ? "max-w-[1316px]" : "max-w-7xl",
        )}
      >
        {/* Studio layout test: no breadcrumbs, so nothing competes with the title and preview. */}
        {!usesStudioLayout(colorId) && (
          <Breadcrumbs
            items={[
              { label: t("home", "Home"), href: "/" },
              { label: COLOR_HUB_NAMES[language][0], href: "/color-screens" },
              { label: title ?? defaultTitle, href: `/${colorId}-screen` },
            ]}
          />
        )}
        {usesStudioLayout(colorId) ? (
          <>
            <ScreenStudio
              key={colorId}
              initialColorId={colorId}
              title={title ?? defaultTitle}
              focus
              rail
              grown
              attached
              swatches={false}
              belowTool={
                // Same as the tool pages: the related screens under the tool, beside the ad.
                <TryNextGallery
                  currentSlug={`${colorId}-screen`}
                  className="mt-3"
                  defaultTab="colors"
                  video
                  toolLayout
                />
              }
            />
            {/* First ad on desktop and tablet, after the gallery; phones get theirs after the first content section. */}
            <InlineAd className="mt-6 hidden md:flex" />
          </>
        ) : (
          <>
            <ToolWithAds>
              <ScreenTool
                key={colorId}
                initialColorId={colorId}
                title={title ?? defaultTitle}
                intro={intro}
              />
            </ToolWithAds>
            <TryNextGallery
              currentSlug={`${colorId}-screen`}
              className="mt-2"
            />
          </>
        )}
      </div>
    </section>
  );
}
