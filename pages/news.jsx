import {Container, PageHeading, PrimaryButton, NewsCard} from "../components"
import { SlArrowRight } from "react-icons/sl"
import newsList from  "../data/newsList"

export default function News() {

  const headImage = "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
  // console.log();
  // function replacer(key, value) {
  //   // Filtering out properties
  //   console.log(key);
  //   if (typeof key === "category_link" || typeof key==="url_uid" || typeof key==="index" || typeof key==="index") {
  //     return false;
  //   }
  //   return value;
  // }

  // const foo = {
  //   foundation: "Mozilla",
  //   model: "box",
  //   week: 45,
  //   transport: "car",
  //   month: 7,
  // };
  // console.log(JSON.stringify(newsList, replacer));
  // '{"week":45,"month":7}'
  return (
    <>
      <PageHeading image={headImage}>
        <h1 className="section-title text-blue-600">News & Events</h1>
        <p className="text-gray-600 text-lg">
          Get the latest updates from the Jowien Bureau on our health sector news page. Follow us for coverage of our events, initiatives, and more.
        </p>
      </PageHeading>

      <section className="py-20">
        <Container>

          {/* <div className="bg-gray-600 flex mb-20 gap-10 justify-start flex-col flex-wrap sm:flex-row md:flex-row"> */}
          <div className="gap-10 mb-20 w-full h-full columns-1 sm:columns-2 md:columns-3">
          {
            newsList.map((item, index) => {
              return(
                <NewsCard
                  key={item.uid}
                  image={item.image}
                  date={item.date}
                  category={item.category}
                  title={item.title}
                  excerpt={item.excerpt}
                  index={index} />
              )
            })
          }
          </div>
        </Container>

        <Container>
          <div className="flex flex-wrap md:flex-nowrap">
          <PrimaryButton link="/news" className="text-lg w-full md:w-auto">
            Load more news <SlArrowRight className="ml-3" />
          </PrimaryButton>
          </div>
        </Container>
      </section>
    </>
  );
}
