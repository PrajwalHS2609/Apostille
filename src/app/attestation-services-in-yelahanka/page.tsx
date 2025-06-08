import YelahankaAttestationContent from "@/components/AttestationCities/YelahankaAttestation/YelahankaAttestationContent";
import YelahankaAttestationHead from "@/components/AttestationCities/YelahankaAttestation/YelahankaAttestationHead";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeCountries from "@/components/HomePage/HomeCountries/HomeCountries";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import attestationBanner from "@/media/images/attestationBanner.png";

export const metadata = {
    title:
      "Attestation services in Yelahanka, Bangalore for All types of Documents",
    description:
      "Attestation Services in Yelahanka, Bangalore for all types of such as Birth, Degree, and Marriage & Commercial Documents. Call Now!",
    canonical:
      "https://foreignembassyattestation.com/attestation-services-in-yelahanka",
    keywords: [
      "Attestation, Apostille, Bangalore, Best Price",
      "Birth, Marriage, Degree",
    ],
  };

export default function KanakanagarAttestation() {
  return (
    <div className="main-container">
      <HeaderComponent
        imageSrc={attestationBanner.src}
        alt="attestation Banner"
      />
      <YelahankaAttestationHead />
      <HomeService />
      <HomeCountries />
      <HomeWhy />
      <YelahankaAttestationContent />
    </div>
  );
}
