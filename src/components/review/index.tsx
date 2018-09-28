import * as React from "react";
import "./index.scss";
import {IUser} from 'components/friendHeader'
import Icon from 'components/Icon'

export interface IReview {
    answer: string;
    content: string;
    receive?: string;
}

export interface IReviewProps {

    likes: IUser[];
    reviewList: IReview[];

}

export default class Review extends React.Component<IReviewProps, any> {
    public _renderItem(item: IReview, index: number) {
        return (
            <div key={index}>
                <span className="answer">{item.answer}</span>
                {item.receive ? (
                    <React.Fragment>
                        回复
                        <span className="receive">{item.receive}</span>
                    </React.Fragment>
                ) : null}
                :<span className="review-container">{item.content}</span>
            </div>
        );
    }

    public render() {
        const {reviewList, likes} = this.props;
        return (reviewList.length || likes.length) ? (
            <div className="news-review">
                <span className="arrow"/>

                {likes.length ?
                    <div className={`${ !reviewList.length ? 'no-border-bottom' : ''} likes-wrap`}>
                        <Icon icon='icon-zan'/>
                        {
                            likes.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <span>{item.name}</span>
                                        {index === likes.length - 1 ? '' : ' , '}
                                    </React.Fragment>
                                )
                            })
                        }
                    </div> : null}

                {reviewList.map((item, index) => {
                    return this._renderItem(item, index);
                })}
            </div>
        ) : null;
    }
}
