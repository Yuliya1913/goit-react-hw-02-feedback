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

  onLeaveFeedback = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => {
      return {
        ...this.state,
        [name]: prevState[name] + 1,
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
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
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
