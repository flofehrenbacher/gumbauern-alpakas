import { Link } from "@reach/router";
import { css } from "emotion";
import React from "react";

const styles = {
  navigation: css`
    width: 100%;
    background-color: black;
    padding: 10px;
  `,
  link: css`
    color: white;
    margin-right: 10px;
  `,
};

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/unsere-tiere">
        Unsere Tiere
      </Link>
      <Link className={styles.link} to="/alpakawanderung">
        Alpakawanderung
      </Link>
      <Link className={styles.link} to="/ueber-alpakas">
        Über Alpakas
      </Link>
      <Link className={styles.link} to="/kontakt">
        Kontakt
      </Link>
    </nav>
  );
}
