import React from "react";
import { useTranslation, initReactI18next } from "react-i18next";

function App() {
	const { t } = useTranslation();

	return <h2>{t("Welcome to React")}</h2>;
}

export default App;
