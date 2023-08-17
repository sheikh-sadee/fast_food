import bgImg from "../../../public/img-82.jpg";
import img01 from "../../../public/img-83.png";
import quoteImg1 from "../../../public/img-84.png";
import quoteIcon from "../../../public/quote-icon.svg";
import Image from "next/image";
import { PostDetail, PostBanner } from "./BlogDetail.styles";
import Button from "../UI/Button";

function BlogDetail() {
  return (
    <PostDetail>
      <PostBanner>
        <div
          className="img-box"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        ></div>
        <div className="text-box">
          <div className="holder">
            <h1>How to Finance The Start Of Your Own Business</h1>
            <p>
              The 57 million-year-old fossil is both fearsome and comical: a
              long-beaked penguin that stood 5 feet 7 inches tall and weighed
              about 220 pounds
            </p>
            <ul className="info-list">
              <li>
                <span className="text">By Ralph Edwards</span>
              </li>
              <li>
                <span className="text">
                  <span class="material-icons-outlined">watch_later</span>Aug 6,
                  10:23 pm
                </span>
              </li>
              <li>
                <span className="text">
                  <span class="material-icons-outlined">favorite_border</span>
                  830
                </span>
              </li>
              <li>
                <span className="text">
                  <span class="material-icons-outlined">
                    chat_bubble_outline
                  </span>
                  43
                </span>
              </li>
            </ul>
          </div>
        </div>
      </PostBanner>
      <div className="container">
        <div className="post-body">
          <div className="post-content">
            <p>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </strong>
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
          </div>
          <div className="img-wrap">
            <Image src={img01} alt="img" />
          </div>
          <div className="post-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
            <div className="flex-holder">
              <div className="text-box">
                <p>
                  Geography as a discipline can be split broadly into two main
                  subsidiary fields: human geography and physical geography. The
                  former largely focuses on the built environment and how humans
                  create, view, manage, and influence space. The latter examines
                  the natural environment, and how organisms, climate, soil,
                  water, and landforms produce and interact.
                  <br /> Geography as a discipline can be split broadly into two
                  main subsidiary fields: human geography and physical
                  geography. The former largely focuses on the built environment
                  and how humans create, view, manage, and influence space. The
                  latter examines the natural environment, and how organisms,
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="widget-bar">
                <strong className="heading">Popular Blog</strong>
                <div className="post-box">
                  <div className="img-box">
                    <Image src={img01} alt="img" />
                  </div>
                  <strong className="title">
                    Super September updates are here
                  </strong>
                  <p>
                    In the essays &quot;Overstating the Arab State&quot;, by
                    Nazih Ayubi, and &quot;Is Jordan Palestine?&quot;, by
                    Raphael Israel, the authors deal with the psychologically
                    fragmented postcolonial identity.
                  </p>
                </div>
              </div>
            </div>
            <div className="quote-holder">
              <blockquote>
                <Image className="quote-img" src={quoteIcon} alt="icon" />
                <q>
                  Names of places... are not geography... know by heart a whole
                  gazetteer full of them would not, in itself, constitute anyone
                  a geographer. Geography has higher aims than this: it seeks to
                  classify phenomena.
                </q>
                <cite>
                  <div className="img-box">
                    <Image src={quoteImg1} width="60" alt="img" />
                  </div>
                  <strong className="name">William Peterson</strong>
                  <span className="designation">Travel Agent</span>
                </cite>
              </blockquote>
            </div>
            <ul className="tags-list">
              <li>
                <Button type="outline" sm>
                  Bank
                </Button>
              </li>
              <li>
                <Button type="outline" sm>
                  Card
                </Button>
              </li>
              <li>
                <Button type="outline" sm>
                  Credit Card
                </Button>
              </li>
              <li>
                <Button type="outline" sm>
                  Credit Tip Tuesday
                </Button>
              </li>
              <li>
                <Button type="outline" sm>
                  Credit Utilization
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PostDetail>
  );
}

export default BlogDetail;
