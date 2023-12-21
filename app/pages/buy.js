import React from 'react';

const Buy = () => {
    return (
        <div>
            <h1>Buy Data</h1>
            <form>
                <label>
                    Data Type:
                    <input type="text" name="dataType" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Buy;
