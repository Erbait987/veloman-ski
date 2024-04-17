import client from "@/app/contentful";
import styles from "../styles/styles.module.scss";

import { Map } from "../components/Map";
import { ContactUs } from "../components/ContactUs";
import Link from "next/link";
import Image from "next/image";

export const getData = async () => {
  try {
    const res = await client.getEntries({
      content_type: "products",
      "sys.id": process.env.NEXT_PUBLIC_ENTRY_ID,
    });
    const items = res.items;
    return items;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return [];
  }
};

const Snowboard = async () => {
  const items = await getData();
  return (
    <>
      <section>
        <div className="container">
          <div>
            <div className={styles.bicycleContainer}>
              <h2>Прокат сноубордов</h2>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.winter} border="1">
                <thead>
                  <tr>
                    <th>Сутки</th>
                    <th>12ч</th>
                    <th>1д</th>
                    <th>2д</th>
                    <th>3д</th>
                    <th>7д</th>
                    <th>30д</th>
                    <th>120д</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length === 0 ? (
                    <tr>
                      <td>Loading...</td>
                      <td>Loading...</td>
                    </tr>
                  ) : (
                    items.map((item, index) =>
                      item.fields.snowboard.map((board, indexd) => (
                        <tr key={indexd}>
                          <td>{board.category}</td>
                          {board.prices.map((price, idx) => (
                            <td key={idx}>{price} ₽</td>
                          ))}
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>

            <p className={styles.toAccs}>
              Также в нашем прокате есть вся необходимая амуниция и защита для
              катания
              <span>
                <Link href="/clothes"> Подробнее</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.drawUp}>
            <Image
              className={styles.drawUpImg}
              src="/svg/snowboard-silhouette-svgrepo-com.svg"
              alt="BicycleImage"
              width={420}
              height={570}
            />
            <div className={styles.drawUpDocs}>
              <h3>Для аренды сноубордов потребуется</h3>
              <div className={styles.drawUpFlex}>
                <Image
                  src="/svg/id-svgrepo-com.svg"
                  alt="IdImage"
                  width={105}
                  height={110}
                />
                <div>
                  <h4>Паспорт</h4>
                  <p>
                    Для составления договора проката нам будет нужен ваш паспорт
                  </p>
                </div>
              </div>
              <div className={styles.drawUpFlex}>
                <Image
                  src="/svg/wallet-svgrepo-com.svg"
                  alt="WalletImage"
                  width={105}
                  height={110}
                />
                <div>
                  <h4>Залог (1 из 2-ух вариантов)</h4>
                  <p>
                    Документ (паспорт РФ, загранпаспорт, водительское
                    удостоверение, военный билет)
                  </p>
                  <p>
                    Денежный залог в размере 10000 рублей за комплект
                    оборудования
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ContactUs />
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Как выбрать сноуборд?</h2>
            <div className={styles.choiceTop}>
              <div>
                <p>
                  Сноуборд можно отнести к экстремальным видам снаряжения,
                  потому каждая характеристика может повлиять на поведение на
                  склоне радикальным образом. Чтобы эффективно обучаться и
                  совершенствоваться, нужно ответственно подойти к процессу
                  выбора.
                </p>
                <h5>Учитывается несколько аспектов:</h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>Назначение, стиль катания</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Уровень подготовки райдера</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Жесткость доски</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Форма</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Прогиб</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Ширина</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Ширина</span>
                  </li>
                </ul>
                <p>
                  Известно каждому, что горнолыжный спорт — это весьма дорогое
                  сезонное удовольствие, и купить крутой сноуборд или
                  ультрасовременные горные, беговые лыжи может позволить себе не
                  каждый
                </p>
                <p>
                  Но мы предлагаем вам самую выгодную альтернативу – прокат
                  сноубордов и лыж в нашем салоне, что существенно сэкономит ваш
                  бюджет. К тому же вы будете избавлены от проблемы, где хранить
                  инвентарь в теплое время года, когда он будет не нужен
                </p>
                <p>
                  Прокат экипировки для зимних видов спорта SKIHOUSE в
                  Санкт-Петербурге и Ленинградской области предлагает своим
                  клиентам надежные и комфортные сноуборды, горные и беговые
                  лыжи в аренду на самых выгодных условиях
                </p>
                <p>
                  Вам больше не придется раздумывать о том, как провести свои
                  каникулы или выходные, потому что, попробовав один раз, вы не
                  забудете это никогда!
                </p>
              </div>
              <div className={styles.choiceTopImages}>
                <Image
                  className={styles.imageCover}
                  src="/images/snowb1.jpg"
                  alt="SNOWBOARD IMAGE"
                  width={555}
                  height={690}
                />
                <Image
                  className={styles.imageCover}
                  src="/images/snowb2.jpg"
                  alt="SNOWBOARD IMAGE"
                  width={555}
                  height={370}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Стиль катания</h2>
            <div className={styles.choiceTop}>
              <div>
                <h5>
                  Среди множества стилей выделяют три основных, которые широко
                  распространены:
                </h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Универсальные или ол-маунтин, то есть езда по
                      подготовленным склонам различными стилями
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      фристайл – прыжки на трамплинах, катание в трубах и по
                      перилам различной конфигурации;
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Фрирайд – катание по диким трассам, обычно с глубоким
                      рыхлым снегом
                    </span>
                  </li>
                </ul>
                <p>
                  Подобной классификации придерживается большинство
                  производителей, что позволяет сопоставлять и оценивать
                  возможности снаряжения.
                </p>
                <p>
                  <strong>All-mountain</strong> будет эффективной и на
                  отратраченном склоне и на целине с недавно выпавшим снегом. В
                  зависимости от конкретных показателей можно добиться
                  скоростных характеристик или большей устойчивости, необходимой
                  для начинающих райдеров. Универсал хорош тем, что позволит
                  отработать простейшие трюки в парке, например, чтобы
                  определиться, нужен ли специализированный борд для таких
                  задач.
                </p>
                <p>
                  Здесь существует четкое разделение по опыту райдеров на
                  новичков, прогрессирующих и профессионалов.
                </p>
                <p>
                  <strong>Freestyle</strong> подразумевает высокие навыки
                  катания, физическую подготовку, иначе любой прыжок может
                  закончиться падением, травмой или поломкой оснащения.
                </p>
                <h5>
                  Есть несколько основных типов фигур, которые используются:
                </h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Трамплины. Горки с различным углом подъема, дугообразные,
                      которые резко обрываются на максимальной высоте, что
                      позволяет оторваться от склона. В воздухе выполняются
                      вращения и различные комбинации трюков
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Рейлы или перила. Это чаще всего трубчатые направляющие,
                      приподнятые над землей, на которые нужно запрыгнуть и
                      проскользить
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Хаф-пайп или труба. Это два больших трамплина с
                      дугообразными подъемами, напоминающие трубу, разрезанную
                      вдоль
                    </span>
                  </li>
                </ul>
                <Image
                  className={styles.imageCover}
                  src="/images/snowb4.jpg"
                  alt="SNOWBOARD IMAGE"
                  width={555}
                  height={360}
                />
              </div>
              <div className={styles.choiceTopImages}>
                <Image
                  className={styles.imageCover}
                  src="/images/snowb3.jpg"
                  alt="SNOWBOARD IMAGE"
                  width={555}
                  height={840}
                />
                <div className={styles.border}></div>
                <p>
                  Для каждого варианта препятствий существует набор
                  характеристик, которые позволят борду проявить себя на них
                  лучше всего.
                </p>
                <div className={styles.border}></div>
                <p className={styles.tacLeft}>
                  Фристайлерское снаряжение легче универсалов, ростовка короче,
                  гибкость выше. Обычно используется прогиб твин-тип. Такое
                  оснащение позволит кататься на любых склонах, но на жесткой
                  поверхности и при разгоне будет нестабильна.
                </p>
                <p className={styles.tacLeft}>
                  <strong>Freeride</strong> — это одна из разновидностей
                  экстрима, когда вместо подготовленной трассы райдер идет на
                  целинный склон. Здесь обычно рыхлый снег большой глубины,
                  большой риск столкновения из-за скрытых этим самым снегом
                  препятствий. Потому борд должен обладать маневренностью,
                  хорошо «всплывать» на поверхность и не зарываться. Необходим
                  очень высокий уровень подготовки и физические данные.
                </p>
                <p className={styles.tacLeft}>
                  Такие борды длиннее среднестатистических универсалов, обладают
                  большей жесткостью, форма направленная.
                </p>
                <p className={styles.tacLeft}>
                  Часто в рамках этого стиля используют необычные формы,
                  например, раздвоенный хвост – «рыбий хвост». Нос широкий и
                  мягкий для эффективного подъема из толщи снега. Хвост жесткий,
                  чтобы не терять сцепление при повороте.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Жесткость</h2>
            <div className={styles.choiceTop}>
              <div>
                <p>
                  Для определения жесткости производители используют
                  универсальную шкалу от 1 до 10, где 1 – минимум, 10 –
                  максимум. Тем не менее, здесь не закреплены строгие значения,
                  потому у разных фирм эти цифры могут разниться.
                </p>
                <h5>Проще всего использовать три группы:</h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>Низкая</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Средняя</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Высокая</span>
                  </li>
                </ul>
                <p>
                  Доски с низкой жесткостью – это снаряжение для детей или
                  новичков. Они хорошо отрабатывают ошибки, особенно на малой
                  скорости, потому хороши для обучения. С ростом жесткости
                  должен подниматься и уровень райдера.
                </p>
                <p>
                  Такое оснащение подойдет для прогрессирующих сноубордистов и
                  некоторых стилей, например, для джиббинга (катания по перилам
                  и аналогичным препятствиям).
                </p>
                <p>
                  Жесткий борд не прощает ошибок, потому для успешного
                  пилотирования такого снаряда потребуется высокий навык. То же
                  время, модели отлично разгоняются.
                </p>
                <Image
                  className={styles.imageCover}
                  src="/images/snowb6.jpg"
                  alt="SNOWBOARD IMAGE"
                  width={555}
                  height={275}
                />
              </div>
              <div className={styles.choiceTopImages}>
                <Image
                  className={styles.imageCover}
                  src="/images/snowb5.jpg"
                  alt="SNOWBOARD IMAGE"
                  width={555}
                  height={630}
                />
                <div className={styles.border}></div>
                <p>
                  Средний класс обеспечивает оптимальное соотношение между
                  комфортом, управляемостью и скоростными характеристиками.
                </p>
                <div className={styles.border}></div>
                <p>
                  Жесткость доски может распределяться неравномерно по площади.
                  Так фристайлерские модели для профи жестче по краям и мягче
                  посередине. Это позволяет использовать борд в качестве пружины
                  для некоторых трюков. Фрирайдерское снаряжение жестче в центре
                  и у хвоста, но нос мягкий. Это обеспечивает стабильность на
                  скорости, а так же адекватное управление на укатанном склоне.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Форма</h2>
            <div className={styles.choiceTop}>
              <div className={styles.choiceTopImages}>
                <Image
                  className={styles.imageCover}
                  src="/images/snowb7.jpg"
                  alt="SNOWBOARD IMAGE"
                  width={555}
                  height={470}
                />
                <Image
                  className={styles.imageCover}
                  src="/images/snowb8.jpg"
                  alt="SNOWBOARD IMAGE"
                  width={555}
                  height={390}
                />
              </div>
              <div>
                <p>
                  Прогиб является формой борда в продольном направлении. Данный
                  параметр является одним из определяющих поведение снаряжения.
                </p>
                <h5>Существует 4 варианта:</h5>

                <ul>
                  <li>
                    <span>❉</span>
                    <span>Кэмбер</span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>Рокер</span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>Флэт</span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>Гибрид</span>
                  </li>
                </ul>
                <p>
                  Это лишь основные варианты, многие производители постоянно
                  совершенствуют форму в поисках идеального снаряда для
                  райдеров.
                </p>
                <p>
                  Кэмбер без нагрузки (веса сноубордиста) касается плоской
                  поверхности всего на двух участках скользяка. Это небольшой
                  промежуток перед носом и перед хвостом, центр выгнут вверх.
                  Под нагрузкой форма меняется и площадь контакта увеличивается.
                  Такой профиль демонстрирует стабильность на разгоне, подходит
                  для фристайлеров.
                </p>
                <p>
                  Флэт – это плоскость с задранными концами, центр не имеет
                  изгиба. Отлично подойдет для парка (рейлы, боксы), дает
                  маневренность.
                </p>
                <p>
                  Рокер – обратный прогиб, альтернатива классике. Здесь идет
                  равномерный изгиб по всей длине с подъемом концов над землей.
                  Подойдет для мастеров в парке, упрощает вращение и приземление
                  после него, комфортна в рыхлом снегу. На высокой скорости
                  теряется стабильность из-за малой контактной длины канта.
                </p>
                <p>
                  Гибрид сочетает кэмбер и рокер в различных соотношениях.
                  Например, кэмбер/рокер/кэмбер маневренный, сохраняет отдачу,
                  щелчок и прекрасно закантовывается. Именно здесь производители
                  демонстрируют наибольшую изобретательность, создавая
                  узкоспециализированные модели с выдающимися характеристиками.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Ширина и Ростовка</h2>
            <div className={styles.choiceTop}>
              <Image
                className={styles.imageCover}
                src="/images/snowb9.jpg"
                alt="SNOWBOARD IMAGE"
                width={555}
                height={480}
              />
              <div>
                <p>
                  Между длиной и шириной доски есть прямая зависимость – чем
                  больше ростовка, тем шире модель. Однако, помимо стандартных
                  соотношений выпускаются изделия увеличенной площади, что
                  подойдет для райдеров с большой ступней (от 44 размера). Это
                  позволит избежать цепляния ботинком склона в повороте, носок
                  не должен выступать дальше 2-3 см.
                </p>
                <p>Стандарт маркируется – regular, увеличенные – wide.</p>
                <p>
                  Ростовка – это длина борда, которая зависит от роста и веса
                  райдера. Чем больше нагрузка, тем больше должна быть доска.
                  Усредненное значение – модель должна доставать до подбородка,
                  но быть ниже человека на 15-20 см.
                </p>
                <p>
                  Для фрирайда нужна модель длиннее среднего значения, для
                  фристайла – чуть короче для лучшей маневренности. Если вы
                  значительно легче среднестатистического веса для вашего роста,
                  то борд нужен покороче и наоборот. Начинающим можно
                  остановиться на коротких досках, достающих до подбородка.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Бренды</h2>
            <div className={styles.choiceTop}>
              <div>
                <p>
                  Выпуском досок занимаются десятки компаний, начиная от
                  китайских производителей, появившихся всего несколько лет
                  назад, до топовых с вековой историей. Китайцы зарекомендовали
                  себя скорее с плохой стороны, но компенсируют слабое качество
                  низкой ценой. Лучшие же марки – это производители-энтузиасты,
                  в том числе выпускающие каждый борд вручную.
                </p>
                <h5>ТОП-5 сноубордических брендов:</h5>

                <ul>
                  <li>
                    <span>❉</span>
                    <span>
                      BF SNOWBOARDS. Китай, но более-менее качественный.
                      Однозначно лидирует по стоимости, подойдет для «поиска
                      себя» в данном виде спорта;
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      ARBOR. Эта молодая компания привлекает молодых
                      спортсменов, но в основном за счет дизайна;
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      SALOMON. Французский производитель с широким
                      ассортиментом;
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      HEAD. Австрия, мастера своего дела, но по цене не так
                      демократичны;
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      BURTON. Легендарные изделия от человека, который считается
                      прародителем борда.
                    </span>
                  </li>
                </ul>
                <p>
                  Если желаете опробовать силы в сноубординге, готовы порадовать
                  вас выгодной арендой снаряжения!
                </p>
              </div>
              <Image
                className={styles.imageCover}
                src="/images/snowbord1_6_11zon.jpg"
                alt="SNOWBOARD IMAGE"
                width={555}
                height={660}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div style={{ marginBottom: "-10px" }}>
          <Map />
        </div>
      </section>
    </>
  );
};

export default Snowboard;
