import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

class BackendQueryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  async componentDidMount() {
    const self = this;
    const { steps } = this.props;
    const search = steps.search.value;
console.log(search)
    try {
      const response = await axios.post('http://localhost:8008/get_chatbot_answer', {
        question: search,
      });

      const result = response.data; 
     console.log(result+"salma")
 self.setState({ loading: false, result });
    } catch (error) {
      console.error('Error fetching data:', error);
      self.setState({ loading: false, result: 'Error fetching data.' });
    }
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  handleCopyClick = () => {
    this.setState({ isIconChanged: true });

    setTimeout(() => {
      this.setState({ isIconChanged: false });
    }, 2000);
  };

  render() {
    const { trigger, loading, result, isIconChanged } = this.state;

    return (
      
      <div className="backend-query" style={{ backgroundColor: "#5082ba !important" }}>
        {loading ? <Loading /> : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: "14px",
              backgroundColor: "#5082ba",
              borderRadius: "18px 18px 18px 0",
              color: "white",
              marginRight: "10%",
              padding: "10px",
            }}
          >
            <CopyToClipboard text={result}>
              <button
                type="button"
                variant="gradient"
                color="dark"
                iconOnly={true}
                circular={true}
                size="small"
                onClick={this.handleCopyClick}
              >
                {isIconChanged ? <CheckIcon /> : <ContentCopyIcon />}
              </button>
            </CopyToClipboard>
            <div><span>&nbsp;&nbsp;</span>{result}</div>
          </div>
        )}
        {!loading && (
          <div
            style={{
              marginTop: 20,
            }}
          >
            {!trigger && (
              <Stack direction="row" alignItems="flex-end" spacing={0}>
                <Grid xs={6}>
                  <p style={{ fontSize: "14px" }}>evaluate to continue</p>
                </Grid>
                <Grid xs={2}>
                  <button
                    type="button"
                    color="dark"
                    iconOnly={true}
                    circular={true}
                    size="small"
                    onClick={() => this.triggetNext()}
                  >
                    <ThumbUpIcon />
                  </button>
                </Grid>
                <Grid xs={2}>
                  <button
                    type="button"
                    color="dark"
                    iconOnly={true}
                    circular={true}
                    size="small"
                    onClick={() => this.triggetNext()}
                  >
                    <ThumbDownIcon />
                  </button>
                </Grid>
              </Stack>
            )}
          </div>
        )}
      </div>
    );
  }
}

BackendQueryComponent.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

BackendQueryComponent.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};


export default BackendQueryComponent;
