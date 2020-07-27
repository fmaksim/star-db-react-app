import React from "react";
import ErrorBoundry from "../common/error-boundry";

const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                <ErrorBoundry>
                    {left}
                </ErrorBoundry>
            </div>
            <div className="col-md-6">
                <ErrorBoundry>
                    {right}
                </ErrorBoundry>
            </div>
        </div>
    );
}

export default Row;