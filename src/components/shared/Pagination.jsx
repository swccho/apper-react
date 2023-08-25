import React from 'react';

const Pagination = () => {
    return (
        <div className="pagination">
            <ul>
                <li><a href="#" className="prev"><i className="las la-arrow-left"></i> Prev</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#" className="active">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
                <li><a href="#" className="next">Next <i className="las la-arrow-right"></i></a></li>
            </ul>
        </div>
    );
};

export default Pagination;
