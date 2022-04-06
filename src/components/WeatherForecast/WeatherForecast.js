import Card from '../Card/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCloudBolt } from '@fortawesome/free-solid-svg-icons';

import styles from './WeatherForecast.module.scss';

const WeatherForecast = () => (
  <>
    <Card>
      <div className={styles.header}>
        <h2>Wednesday, 30 March</h2>
        <button className={styles.dropdownButton}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      <div className={styles.list}>
        
      </div>
    </Card>
    <Card>
      <div className={styles.header}>
        <h2>Thursday, 31 March</h2>
        <button className={styles.dropdownButton}>
          <FontAwesomeIcon icon={faChevronDown} rotation={180} />
        </button>
      </div>
      <div className={styles.dataEntry}>
        <div className={styles.dataEntryWrapper}>
          <div className={styles.hourBlock}>
            <p>18:00</p>
          </div>
          <div className={styles.params}>
            <div className={styles.iconParam}>
              <FontAwesomeIcon icon={faCloudBolt} />
            </div>
            <div className={styles.param}>
              <div className={styles.paramValue}>
                35°C
              </div>
              <p>Min</p>
            </div>
            <div className={styles.param}>
              <div className={styles.paramValue}>
                40°C
              </div>
              <p>Max</p>
            </div>
            <div className={styles.paramHide}>
              <div className={styles.paramValue}>
                100m/s
              </div>
              <p>Wind</p>
            </div>
            <div className={styles.param}>
              <div className={styles.paramValue}>
                5%
              </div>
              <p>Rain</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dataEntry}>
        <div className={styles.dataEntryWrapper}>
          <div className={styles.hourBlock}>
            <p>21:00</p>
          </div>
          <div className={styles.params}>
            <div className={styles.iconParam}>
              <FontAwesomeIcon icon={faCloudBolt} />
            </div>
            <div className={styles.param}>
              <div className={styles.paramValue}>
                35°C
              </div>
              <p>Min</p>
            </div>
            <div className={styles.param}>
              <div className={styles.paramValue}>
                40°C
              </div>
              <p>Max</p>
            </div>
            <div className={styles.paramHide}>
              <div className={styles.paramValue}>
                100m/s
              </div>
              <p>Wind</p>
            </div>
            <div className={styles.param}>
              <div className={styles.paramValue}>
                5%
              </div>
              <p>Rain</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </>
);

export default WeatherForecast;