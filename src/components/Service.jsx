import React from "react";
import {listFake, fakeURL } from "../data/data";
import ListItem from "./ListItem";
import Logo from "./Logo";
import Link from "./Link";
import DisorderedList from "./DisorderedList";

const Service = (props) => (
  <DisorderedList
    items={listFake}
    className="service-list service-list__horizontal"
  >
    {(items) =>
      items.map((item) => (
        <ListItem key={Math.random()} className="service-item">
          <Logo logoURL={fakeURL} />
          <Link className="service-link" href="/">
            {item}
          </Link>
        </ListItem>
      ))
    }
  </DisorderedList>
);

export default Service;