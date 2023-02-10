import {Container, PageHeading, PrimaryButton} from "../components"

export default function Gallery() {

  const headImage = "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";

  return (
      <PageHeading image={headImage}>
        <h1 className="section-title text-blue-600">Media Gallery</h1>
        {/* <p className="text-gray-500 text-lg">
          Get the latest updates from the Jowien Bureau on our health sector news page. Follow us for coverage of our events, initiatives, and more.
        </p> */}
      </PageHeading>
  );
}
