import React from "react";
import Widget from "./Widget";
import {words } from "../data/data";
import DisorderedList from "./DisorderedList";
import Link from "./Link";
import ListItem from "./ListItem";
import img from "../img/weather.png"
// import Logo from "./Logo";

const WidgetContainer = (props) => (
  <div className="widget-container">
    <Widget title="Погода">
      <div>
        <img
          style={{ maxWidth: "100%" }}
          src= {img}
          alt="weather"
        />
      </div>
    </Widget>
    <Widget title="Карта Германии">Расписания</Widget>
    <Widget title="Посещаемое" items={words}>
      <DisorderedList items={words} className="visited-list">
        {(items) =>
          items.map((item) => (
            <ListItem key={Math.random()} className="news-top-item">
              <Link className="news-top-link" href="/">
                {item}
              </Link>
            </ListItem>
          ))
        }
      </DisorderedList>
    </Widget>
    <Widget title="Телепрограмма">
      <p>02:00 ТНТ. Best</p>
      <p>02:15 Джинглики</p>
      <p>02:25 Наедине со всеми</p>
    </Widget>
    <Widget title="Эфир">
      <p> Управление как искусство</p>
      <p> Ночь. Мир в это время</p>
      <p> Андрей Возн..</p>
    </Widget>
  </div>
);

export default WidgetContainer;