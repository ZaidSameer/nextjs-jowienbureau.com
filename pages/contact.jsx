import Hero from "../components/Hero";
import Container from "../components/Container";

export default function Contact() {
  return (
    <>

    <section>
      <Container>
        <p>Fields marked with an asterisk (*) are required.</p>
        <p>Looking for more information or want to try one of our paid Asana plans? Submit your information and an Asana representative will follow up with you as soon as possible. Have a simple question? Check out our FAQ.</p>
        <p>By completing and submitting the form, you will receive information, tips, and promotions from Asana. To learn more about how Asana uses your information, see our Privacy Statement.</p>

        <p>Questions about our sizing, returns, exchanges, you name it—just email us at
info@freehandgoods.com or use the form below and our customer service team will get
back to you within 24 hours.</p>
      </Container>
    </section>
      <Hero
        heading="Contact Us"
        message="With a qualified team of (sales, engineers, finance, delivery, etc.), Jowien Bureau is a trusted and preferred provider of medical equipment in Iraq for both the private and governmental sectors."
      />
    </>
  );
}
