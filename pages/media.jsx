import { Container, PageHeading, PrimaryButton } from "../components"
import { useState } from "react";
import FilterTabs from "../components/media/FilterTabs";
import MediaItems from "../components/media/MediaItems";
import makeRandomKey from '../lib/MakeRandomKey'

export default function Gallery() {
  const [filterItems, setFilterItems] = useState("all")

  const headImage = "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";

  let imageList = [
    {"id":"ZHCqY21","category":"image","image":"https://source.unsplash.com/random/1?medical"},{"id":"L1m7I42","category":"image","image":"https://source.unsplash.com/random/2?medical"},{"id":"3t9qxa3","category":"image","image":"https://source.unsplash.com/random/3?medical"},{"id":"pAB3fP4","category":"image","image":"https://source.unsplash.com/random/4?medical"},
    {"id":"iv0lGY1","category":"image","image":"https://source.unsplash.com/random/1?medical"},{"id":"bRG4cr","category":"video","image":"https://source.unsplash.com/random/5?medical"},{"id":"WzmV5P","category":"video","image":"https://source.unsplash.com/random/6?medical"},{"id":"jWdUPm","category":"video","image":"https://source.unsplash.com/random/7?medical"},{"id":"5uBHvX","category":"video","image":"https://source.unsplash.com/random/8?medical"},{"id":"bU3DgR","category":"video","image":"https://source.unsplash.com/random/9?medical"}
  ];

  //////////////////////////////////////////////////////////////////////////////////////////////


  const [data, setData] = useState(imageList);

  const categoryData = imageList.map((item) => {
    return item.category
  });

  const tabsData = ["all", ...new Set(categoryData)];

  const filterCategory = (category) => {
    if (category === "all") {
      setData(imageList);
      setFilterItems('all')

      return;
    }

    const filteredData = imageList.filter((intem) => {
      return intem.category === category;
    })

    setData(filteredData);
    setFilterItems(category);
  }

  const loadMore = () => {
    console.log("the button is clicked")
  }


  return (
    <>
      <PageHeading image={headImage}>
        <h1 className="section-title text-blue-600">Media Gallery</h1>
      </PageHeading>

      <section className="py-20">
        <Container>

          <div className="flex mb-8">
            <FilterTabs filterCategory={filterCategory} length={imageList.length} filterItems={filterItems} tabsData={tabsData} />
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3">

            <MediaItems data={data} />
            {/* <iframe className="w-full mb-4 h-60" src="https://www.youtube.com/embed/UHp9ZnVYGeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>

          <button type="button" className="mt-20 ml-0 btn-secondary" onClick={loadMore
          } >Load more</button>
        </Container>
      </section>
    </>
  );
}
