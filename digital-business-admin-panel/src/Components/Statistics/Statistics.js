import { BsArrowUpShort } from "react-icons/bs";
import StatisticalChart from "../StatisticalChart/StatisticalChart";
import css from "./Statistics.module.css";
import { groupNumber } from "../../data/data";

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <h2 className={css.title}>Overview Statistics</h2>

      <div className={`${css.cards} grey-container`}>
        <div className={css.cardGroup}>
          <div className={css.arrowIcon}>
            <BsArrowUpShort />
          </div>
          <div className={css.card}>
            <span>Top item this month</span>
            <strong>Office comps</strong>
          </div>
        </div>

        <div className={css.card}>
          <span>Items</span>
          <strong>$ {groupNumber(74.00003)}</strong>
        </div>

        <div className={css.card}>
          <span>Profit</span>
          <strong>$ {groupNumber(37000)}</strong>
        </div>

        <div className={css.card}>
          <span>Daily Average</span>
          <strong>$ {groupNumber(57348)}</strong>
        </div>
      </div>

      <StatisticalChart />
    </div>
  );
};

export default Statistics;
