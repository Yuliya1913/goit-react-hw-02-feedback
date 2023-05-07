import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import css from 'components/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncreaseGood = event => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleIncreaseNeutral = event => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleIncreaseBad = event => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleIncreaseGood={this.handleIncreaseGood}
            handleIncreaseNeutral={this.handleIncreaseNeutral}
            handleIncreaseBad={this.handleIncreaseBad}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            // Если есть данные в good или neutral или  bad - то вызывaй метод countTotalFeedback
            total={
              (this.state.good || this.state.neutral || this.state.bad) &&
              this.countTotalFeedback()
            }
            //если есть good - вызывай метод  countPositiveFeedbackPercentage
            positiveFeedback={
              this.state.good && this.countPositiveFeedbackPercentage()
            }
          />
        </Section>
      </div>
    );
  }
}
