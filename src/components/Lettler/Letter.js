import React from "react";
import { Container, Date, Wrapper, Select } from "./styles";
import { useState } from "react";
import translations from "../../translations";

export default function Letter() {
  const [translation, setTranslation] = useState("en");

  function handleChangeTranslation(event) {
    setTranslation(event.target.value);
  }

  return (
    <Wrapper>
      <Select value={translation} onChange={handleChangeTranslation}>
        <option value="pt-BR">PT</option>
        <option value="en">EN</option>
      </Select>
      <Container>
        <Date>
          <p>Florianópolis, 23/03/2023 </p>
        </Date>
        <h1>{translations[translation].title}</h1>
        <p>{translations[translation].message}</p>
        <h2>{translations[translation].goodbye}</h2>
        <h3>{translations[translation].author}</h3>
      </Container>
    </Wrapper>
  );
}
