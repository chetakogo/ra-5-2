import React from "react";
import ListItem from "./ListItem";
import Link from "./Link";
import DisorderedList from "./DisorderedList";
import {someCurrency} from "../data/data";

const Currency = () => (
  <DisorderedList items={someCurrency} className="currency-list currency-list__horizontal">
    {(items) =>
      items.map((item) => (
        <ListItem key={Math.random()} className="currency-item">
          <div>
            <Link  className="currency-link" link="/">
              <span className="currency-desc currency-desc__currency">{item.currency}</span>
            </Link>
            <span className="currency-desc currency-desc__price"
            >
              {item.price}
            </span>
          </div>
        </ListItem>
      ))
    }
  </DisorderedList>
);


export default Currency;