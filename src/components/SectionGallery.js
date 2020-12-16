import React from 'react';
import _ from 'lodash';
import { Gallery } from "gatsby-theme-gallery";

export default class SectionGallery extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(this.props, 'section.section_id', null)} className="gallery">
                <Gallery />
            </section>
        );
    }
}