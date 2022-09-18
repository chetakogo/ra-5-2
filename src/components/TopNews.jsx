import DisorderedList from "./DisorderedList";
import Link from "./Link";
import ListItem from "./ListItem";
import {newsLists} from "../data/data";

const TopNews = () => {
  return (
    <section>
      <DisorderedList
        items={newsLists}
        className="news-top-list news-top-list__horizontal"
      >
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
    </section>
  );
};
export default TopNews;