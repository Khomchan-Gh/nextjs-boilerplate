import Nav from "../components/nav";
import UserBar from "../components/UserBar";
import Head from "next/head";
import ArticleCard from "@/components/ArticleCard";

function Home() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      <Nav />
      <UserBar />
      <div class="card-row">
        <a href="article/one">
          <ArticleCard />
        </a>
        <a href="article/two">
          <ArticleCard />
        </a>
      </div>
      <div class="card-row">
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}

export default Home;
