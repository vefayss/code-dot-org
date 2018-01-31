import React, {Component, PropTypes} from 'react';
import Button from '../Button';
import i18n from "@cdo/locale";
import {SectionLoginType} from '@cdo/apps/util/sharedConstants';

const styles = {
  reset: {
    marginRight: 10,
  },
  image: {
    width: 45
  }
};

class ShowSecret extends Component {
  static propTypes = {
    initialIsShowing: PropTypes.bool,
    secretWord: PropTypes.string,
    secretPicture: PropTypes.string,
    resetSecret: PropTypes.func.isRequired,
    loginType: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  state = {
    isShowing: !!this.props.initialIsShowing,
  };

  show = () => {
    this.setState({
      isShowing: true
    });
  };

  hide = () => {
    this.setState({
      isShowing: false
    });
  };

  reset = () => {
    $.ajax({
      url: `/v2/students/${this.props.id}/update`,
      method: 'POST',
      contentType: 'application/json;charset=UTF-8',
      data: JSON.stringify({secrets: "reset"}),
    }).done((data) => {
      console.log(data);
    }).fail((jqXhr, status) => {
      // We may want to handle this more cleanly in the future, but for now this
      // matches the experience we got in angular
      alert(i18n.unexpectedError());
      console.error(status);
    });
    /*this.setState({
      isShowing: false
    });*/
  };

  render() {
    return (
      <div>
        {!this.state.isShowing &&
          <Button onClick={this.show} color={Button.ButtonColor.white} text={i18n.showSecret()} />
        }
        {this.state.isShowing &&
          <div>
            {this.props.loginType === SectionLoginType.word &&
              <p>{this.props.secretWord}</p>
            }
            {this.props.loginType === SectionLoginType.picture &&
              <img src={'/images/' + this.props.secretPicture} style={styles.image} />
            }
            <Button onClick={this.reset} color={Button.ButtonColor.blue} text={i18n.reset()} style={styles.reset} />
            <Button onClick={this.hide} color={Button.ButtonColor.white} text={i18n.hideSecret()} />
          </div>
        }
      </div>
    );
  }
}

export default ShowSecret;
