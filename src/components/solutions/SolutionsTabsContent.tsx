
import { TabsContent } from "@/components/ui/tabs";
import { ServiceCard } from "./ServiceCard";
import { SuccessStorySection } from "./SuccessStorySection";
import { businessAreas } from "@/data/businessAreas";

export const SolutionsTabsContent = () => {
  return (
    <>
      {businessAreas.map((area) => (
        <TabsContent key={area.id} value={area.id} className="space-y-8 mt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{area.title}</h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">{area.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {area.services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                link={service.link}
                primaryCta={service.primaryCta}
                secondaryCta={service.secondaryCta}
                secondaryLink={service.secondaryLink}
              />
            ))}
          </div>

          <SuccessStorySection />
        </TabsContent>
      ))}
    </>
  );
};
