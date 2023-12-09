import HeroSection from "@/components/HeroSection";
import FeaturedProduct from "@/components/Product/FeaturedProduct";
import ProductBenefit from "@/components/Benefits/ProductBenefit";
import { Benifits } from "@/data/ProductBenefitData";

export default function Home() {
  return (
    <main>
      <div className="scroll-container">
        <section className="scroll-area">
          <HeroSection />
        </section>
        <section className="scroll-area  ">
          <FeaturedProduct />
        </section>
        {Benifits.map((benifit) => {
          return (
            <>
              <section
                className="scroll-area scroll-mb-12 relative"
                id={benifit.id}
                key={benifit.id}
              >
                {benifit.Overlay}
                <ProductBenefit
                  Overlay={benifit.Overlay}
                  Benefit={benifit.Benefit}
                  Enquire={benifit.Enquire}
                  GITag={benifit.GITag}
                  QualityGuarentee={benifit.QualityGuarentee}
                  color={benifit.color}
                  id={benifit.id}
                  image={benifit.image}
                  title={benifit.title}
                  badge={benifit.badge}
                  textColor={benifit.textColor}
                  titleImage={benifit.titleImage}
                />
              </section>
            </>
          );
        })}

        {/* <section className="scroll-area relative">
          <ProductBenefit />
        </section> */}
      </div>
    </main>
  );
}
