import React, { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';

class Footer extends React.Component {
  render() {
    return (
      <OverPack className={this.props.className} playScale={0.05}>
        <TweenOne
          key="0" hideProps={{ reverse: true }}
          animation={{...this.props.anim, type: 'from' }}
        >
          <p>Copyright © 2015 The Project by <a href="#">Ant Motion</a>. All Rights Reserved</p>
        </TweenOne>
      </OverPack>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string,
  anim: PropTypes.object,
};

Footer.defaultProps = {
  className: 'footer',
  anim: {
    y: 30,
    opacity: 0,
  }
};

export default Footer;
