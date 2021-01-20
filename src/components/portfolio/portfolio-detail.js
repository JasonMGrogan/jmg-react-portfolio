import React, { Component } from "react";
import axios from "axios";

// banner_image_url: "https://devcamp-space.s3.amazonaws.com/CqkdfPwi7kLN2Sgm9bdXxNN4?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20210118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210118T222908Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=c7a5ed5a4814b71684b785859655aac9fc01b139ae6f6fe4c8dc3ce02d10b299"
// category: "Technology"
// column_names_merged_with_images: (9) ["id", "name", "description", "url", "category", "position", "thumb_image", "banner_image", "logo"]
// description: "Online tutorials and productivity tips"
// id: 23252
// logo_url: "https://devcamp-space.s3.amazonaws.com/4UDwpN5B7QkaY6AydXsMMtRv?response-content-disposition=inline%3B%20filename%3D%22crondose.png%22%3B%20filename%2A%3DUTF-8%27%27crondose.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20210118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210118T222908Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=288c17eda564dbfd063987c6ce9664079646accd577c0984080769a3cecda21d"
// name: "Crondose"
// position: 1
// thumb_image_url: "https://devcamp-space.s3.amazonaws.com/jK6FevZmaCMgNZYJfj5r2Ydf?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20210118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210118T222908Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=97f1a71e8caebf2a023f71f7fa82c13c47f8b1b0ba44f23316980968fce2baf1"
// url: "https://www.crondose.com"

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    }
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://jasonmgrogan.devcamp.space/portfolio/portfolio_items/${
          this.props.match.params.slug
          }`, 
          { withCredentials: true }
      )
      .then(response => {
        this.setState({
          portfolioItem: response.data.portfolio_item
        })
      })
      .catch(error => {
        console.log("getportfolioitem error", error);
      });
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    };

    const logoStyles = {
      width: "200px"
    };

    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className="portfolio-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>

        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}