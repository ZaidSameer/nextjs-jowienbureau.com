import Hero from "../components/Hero";
import {Container, PageHeading, PrimaryButton} from "../components"

export default function About() {

  const headImage = "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";

  return (
    <>
      <PageHeading image={headImage}>
        <h1 className="section-title text-blue-600">About us</h1>
        <p className="text-gray-500 text-lg">
          With a qualified team of (sales, engineers, finance, delivery, etc.), Jowien Bureau is a trusted and preferred provider of medical equipment in Iraq for both the private and governmental sectors.
        </p>
      </PageHeading>
    </>
  );
}
