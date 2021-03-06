import i18n from "i18next";
import React from "react";
import ReactDOM from "react-dom";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import App from "./App";

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(LanguageDetector)
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		resources: {
			en: {
				translation: {
					"Welcome to React": "Welcome to React and react-i18next",
				},
			},

			fr: {
				translation: {
					"Welcome to React": "Bienvenue a React et react i18next",
				},
			},
		},
		lng: document.querySelector("html").lang, // if you're using a language detector, do not define the lng option
		fallbackLng: "en",
		detection: {
			order: [
				"htmlTag",
				"cookie",
				"querystring",
				"localStorage",
				"sessionStorage",
				"navigator",
				"path",
				"subdomain",
			],

			caches: ["cookie"],
		},
	});

// append app to dom
ReactDOM.render(<App />, document.getElementById("root"));
