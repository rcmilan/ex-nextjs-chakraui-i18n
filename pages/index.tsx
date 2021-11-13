import React from "react";
import useTranslation from "next-translate/useTranslation";
import type { GetStaticProps } from "next";

interface Props {
  date: Date;
}

function Home({ date }: Props) {
  const { t } = useTranslation();
  const text = t("common:greeting");

  return (
    <>
      {date} - {text}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const event = new Date();
  const date = event.toLocaleString(locale);

  return {
    props: {
      date,
    },
  };
};

export default Home;
