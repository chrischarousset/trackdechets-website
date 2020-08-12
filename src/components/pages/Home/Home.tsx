import React from "react";
import { Header } from "../../Header";
import { Layout } from "../../Layout";
import { Hero } from "./Hero";
import { Badges } from "./Badges";
import { FAQ } from "./FAQ";
import { Profiles } from "./Profiles";
import { Newsletter } from "./Newsletter";
import { Footer } from "../../Footer";

export function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Badges />
      <FAQ />
      <Profiles />
      <Newsletter />
      <Footer />
    </Layout>
  );
}
