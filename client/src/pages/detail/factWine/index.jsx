import { Link } from "react-router-dom";
import "./index.scss";
const FactWine = () => {
  return (
    <section className="factWine">
      <div className="container">
        <div className="row">
          <div className="pageSection">
            <h1 className="wineFacts-headline">Facts about the wine</h1>
            <table className="wineFacts">
              <tbody>
                <tr className="wineFactRow">
                  <th>
                    <div className="wineFacts-headingWrapper">
                      <span className="wineFacts-icon--CLgGC">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M11.392 22.723c.2.095.3.143.431.167.105.018.25.018.354 0 .132-.024.231-.072.431-.167C14.777 21.692 22 17.854 22 12.5V8.287c0-.773 0-1.159-.123-1.493a2 2 0 0 0-.519-.777c-.262-.242-.618-.39-1.331-.686l-7.414-3.076c-.226-.094-.34-.141-.456-.16a1 1 0 0 0-.314 0c-.117.019-.23.066-.456.16L3.973 5.33c-.713.296-1.07.444-1.331.686a2 2 0 0 0-.519.777C2 7.128 2 7.514 2 8.287V12.5c0 5.354 7.223 9.192 9.392 10.223Z"
                            stroke="currentColor"
                          ></path>
                          <path
                            d="M12 16.9a4.4 4.4 0 1 0 0-8.8 4.4 4.4 0 0 0 0 8.8Zm5.5-4.4h-2.2m-6.6 0H6.5M12 9.2V7m0 11v-2.2"
                            stroke="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="wineFacts-headerLabel">Winery</span>
                    </div>
                  </th>
                  <td className="wineFacts-fact">
                    <Link className="wineFacts-link">Echeverría</Link>
                  </td>
                </tr>
                <tr className="wineFactRow">
                  <th>
                    <div className="wineFacts-headingWrapper">
                      <span className="wineFacts-icon--CLgGC">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M8.89 17.198a2 2 0 1 0-2.051-3.433 2 2 0 0 0 2.052 3.433ZM13.183 14.634A2 2 0 1 0 11.13 11.2a2 2 0 0 0 2.052 3.434ZM12.66 19.606a2 2 0 1 0-2.053-3.434 2 2 0 0 0 2.052 3.434ZM17.474 12.068a2 2 0 1 0-2.052-3.433 2 2 0 0 0 2.052 3.433ZM16.951 17.041a2 2 0 1 0-2.052-3.434 2 2 0 0 0 2.052 3.434ZM17.287 21.5a2 2 0 1 0-2.052-3.433 2 2 0 0 0 2.052 3.433ZM10.874 4.172c.618.75.612 1.776-.014 2.29-.625.515-1.633.324-2.25-.427-.805-.977-1.477-4.103-1.477-4.103s2.938 1.262 3.741 2.24Z"
                          ></path>
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M14.233 4c-1.846.983-5.26 4.017-4.15 8.29"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="M12.38 5.7c-.056.706.421 2.255 2.77 2.798"
                          ></path>
                        </svg>
                      </span>
                      <span className="wineFacts-headerLabel">Grapes</span>
                    </div>
                  </th>
                  <td className="wineFacts-fact">
                    <Link className="wineFacts-link"> Sauvignon Blanc</Link>
                  </td>
                </tr>
                <tr className="wineFactRow">
                  <th>
                    <div className="wineFacts-headingWrapper">
                      <span className="wineFacts-icon--CLgGC">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="m2.338 19.107 8.76-5.847a8.726 8.726 0 0 1 9.744.038c.1.068.168.175.187.296l.455 3.005c.153 1.01.23 1.514.122 1.918a2 2 0 0 1-1.131 1.316C20.092 20 19.58 20 18.56 20H2.609a.488.488 0 0 1-.271-.893Z"
                          ></path>
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M21.43 16.069v0a6.927 6.927 0 0 0-8.43-.516l-2 1.352M6.853 11c-1.21 0-1.304-.001-1.35-.003C4.11 10.927 3 9.816 3 8.455c0-1.406 1.183-2.546 2.642-2.546.307 0 .601.05.875.143C6.99 4.852 8.195 4 9.606 4M18.797 12.075a4 4 0 1 0-4.527-.651M13 6l-1.5-1M13 9.5 9 11M21 11l1.5 1M20.5 6 23 4.5M16.78 1.5v3"
                          ></path>
                        </svg>
                      </span>
                      <span className="wineFacts-headerLabel">Region</span>
                    </div>
                  </th>
                  <td className="wineFacts-fact">
                    <Link className="wineFacts-link">
                      {" "}
                      Chile / Central Valley / Curico Valley
                    </Link>
                  </td>
                </tr>
                <tr className="wineFactRow">
                  <th>
                    <div className="wineFacts-headingWrapper">
                      <span className="wineFacts-icon--CLgGC">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M13.765 9.585S15 10.554 15 12v5.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V12c0-1.446 1.235-2.415 1.235-2.415.6-.502.578-1.061.578-1.061V5h2.374v3.524s-.021.559.578 1.061Z"
                          ></path>
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="m2.551 5.675 1.836 12.237c.217 1.45.326 2.176.68 2.72a3 3 0 0 0 1.275 1.1C6.934 22 7.667 22 9.134 22h5.732c1.467 0 2.2 0 2.792-.269a3.001 3.001 0 0 0 1.275-1.098c.354-.545.463-1.27.68-2.721L21.45 5.675c.19-1.267.285-1.9.095-2.393a2 2 0 0 0-.88-1.022c-.459-.26-1.1-.26-2.38-.26H5.716c-1.28 0-1.921 0-2.38.26a2 2 0 0 0-.88 1.022c-.19.493-.095 1.126.095 2.393Z"
                          ></path>
                        </svg>
                      </span>
                      <span className="wineFacts-headerLabel">Wine style</span>
                    </div>
                  </th>
                  <td className="wineFacts-fact">
                    <Link className="wineFacts-link">Chile Sparkling</Link>
                  </td>
                </tr>
                <tr className="wineFactRow">
                  <th>
                    <div className="wineFacts-headingWrapper">
                      <span className="wineFacts-icon--CLgGC">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M2.42 10.713c-.136-.215-.205-.323-.243-.49a1.173 1.173 0 0 1 0-.446c.038-.167.107-.275.243-.49C3.545 7.505 6.895 3 12 3s8.455 4.505 9.58 6.287c.137.215.205.323.243.49.028.125.028.322 0 .446-.038.167-.107.274-.243.49C20.455 12.495 17.105 17 12 17s-8.455-4.505-9.58-6.287Z"
                            stroke="currentColor"
                          ></path>
                          <path
                            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-4 6.9c0 1.16-.895 2.1-2 2.1s-2-.94-2-2.1C4 18.39 6 15 6 15s2 3.39 2 4.9Z"
                            stroke="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="wineFacts-headerLabel">Allergens</span>
                    </div>
                  </th>
                  <td className="wineFacts-fact">
                    Contains sulfites
                  </td>
                </tr>
                {/*  
                <tr data-testid="wineFactRow">
                  <th>
                    <div className="wineFacts-headingWrapper--1wh-N">
                      <span className="wineFacts-icon--CLgGC">
                      
                      </span>
                      <span className="wineFacts-headerLabel--14doB">Region</span>
                    </div>
                  </th>
                  <td className="wineFacts-fact--3BAsi">
                    <a
                      className="anchor_anchor-m8Qi- wineFacts-link--3aTg9"
                      href="/wine-countries/chile"
                    >
                      Chile
                    </a>{" "}
                    /{" "}
                    <a
                      className="anchor_anchor-m8Qi- wineFacts-link--3aTg9"
                      href="/wine-regions/central-valley"
                    >
                      Central Valley
                    </a>{" "}
                    /{" "}
                    <a
                      className="anchor_anchor-m8Qi- wineFacts-link--3aTg9"
                      href="/wine-regions/curico-valley"
                    >
                      Curico Valley
                    </a>
                  </td>
                </tr>
                <tr data-testid="wineFactRow">
                  <th>
                    <div className="wineFacts-headingWrapper--1wh-N">
                      <span className="wineFacts-icon--CLgGC">
                      </span>
                      <span className="wineFacts-headerLabel--14doB">
                        Wine style
                      </span>
                    </div>
                  </th>
                  <td className="wineFacts-fact--3BAsi">
                    <a
                      className="anchor_anchor-m8Qi- wineFacts-link--3aTg9"
                      href="/wine-styles/chilean-sparkling"
                    >
                      Chilean Sparkling
                    </a>
                  </td>
                </tr>
                <tr data-testid="wineFactRow">
                  <th>
                    <div className="wineFacts-headingWrapper--1wh-N">
                      <span className="wineFacts-icon--CLgGC">
                      
                      </span>
                      <span className="wineFacts-headerLabel--14doB">
                        Allergens
                      </span>
                    </div>
                  </th>
                  <td className="wineFacts-fact--3BAsi">
                    <span>Contains sulfites</span>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactWine;
