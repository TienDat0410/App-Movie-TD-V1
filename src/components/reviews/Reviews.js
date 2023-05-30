import { Fragment, useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm.js';

import React from 'react'

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, [])

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try {
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });
            console.log(response);
            const updatedReviews = [...reviews, { body: rev.value }];
            rev.value = "";

            setReviews(updatedReviews);
        }
        catch (err) {
            console.error(err);
        }




    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col><h3>Reviews</h3></Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <img src={movie?.poster} alt="" />
                    </Col>
                    <Col>
                        {
                            <>
                                <Row>
                                    <Col>
                                        <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        }
                        {
                            reviews?.map((re, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Row key={index}>
                                            <Col>{re.body}</Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <hr />
                                            </Col>
                                        </Row>
                                    </Fragment>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
            </Container>
        </Fragment>

    )
}

export default Reviews