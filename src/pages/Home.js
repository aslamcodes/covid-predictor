import React from "react";
import { Layout } from "../common/components/Layout";
import { CovidChart } from "../common/components/modules/CovidChart";

export const Home = () => {
  return (
    <Layout>
      <main>
        <CovidChart />
      </main>
    </Layout>
  );
};
