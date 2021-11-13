import React from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import type { NextPage } from "next";

const About: NextPage = () => {
  const { t } = useTranslation();
  const text = t("about:text123", { nome: "Testando Nome" });

  const { locale } = useRouter();

  const event = new Date();
  const date = event.toLocaleDateString(locale);

  return (
    <>
      {date} - {text}
    </>
  );
};

export default About;
