import React from "react";
import { Layout } from "../../Layout";
import { Hero } from "./Hero";
import { Badges } from "./Badges";
import { FAQ } from "./FAQ";
import { Profiles } from "./Profiles";
import { Newsletter } from "./Newsletter";

export function Home() {
  return (
    <Layout>
      <Hero />
      <Badges />
      <FAQ />
      <Profiles />
      <Newsletter />
    </Layout>
  );
}
