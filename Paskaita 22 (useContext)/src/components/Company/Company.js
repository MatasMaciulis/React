// tam kad panaudoti Context "saugykla"
import React, { useContext } from "react";

// importuojame sukurtą Context "saugykla"
import { userContext } from "../../App";

export default function Company() {

// panaudojam Context "saugyklos" informaciją
  const { user } = useContext(userContext);

  return (
    <div>
      <h3>Company</h3>
      <p>
        {user.company?.name} {user.company?.catchPhrase}       
      </p>
    </div>
  );
}
