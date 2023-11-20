// tam kad panaudoti Context "saugykla"
import React, { useContext } from "react";

// importuojame sukurtą Context "saugykla"
import { userContext } from "../../App";

export default function Website() {
  // panaudojam Context "saugyklos" informaciją
  const { user } = useContext(userContext);

  return <div>{user.website}</div>;
}
