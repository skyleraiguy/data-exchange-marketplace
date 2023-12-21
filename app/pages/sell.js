import React from 'react';

const Sell = () => {
    return (
        <div>
            <h1>Sell Data</h1>
            <form>
                <label>
                    Data Type:
                    <input type="text" name="dataType" />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Sell;
