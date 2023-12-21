import React from 'react';

const Trade = () => {
    return (
        <div>
            <h1>Trade Data</h1>
            <form>
                <label>
                    Your Data Type:
                    <input type="text" name="yourDataType" />
                </label>
                <label>
                    Desired Data Type:
                    <input type="text" name="desiredDataType" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Trade;
