import React from "react";
import PropTypes from 'prop-types'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import {Colors} from "../utility";

const ColorsArr = Object.keys(Colors).map(key=>Colors[key])

const CustomPieChart = ({title,categoryData}) =>{
    if (categoryData.length === 0) {
        return <h3 className="text-center mx-3">{title} 还没有任何数据</h3>
    }
    return(
        <div className="pie-chart-component">
            <h3 className="text-center mt-3">{title}</h3>
            {/*适用父组件宽度*/}
            <ResponsiveContainer width={'100%'} height={300}>
                <PieChart>
                    <Pie
                        isAnimationActive={false}
                        data={categoryData}
                        dataKey="value"
                        cx='50%'
                        cy='50%'
                        outerRadius={100}
                        fill="8884d8"
                        label
                    >
                        {
                            categoryData.map((entry,index)=><Cell key={index} fill={ColorsArr[index%ColorsArr.length]}/>)
                        }
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )


}


export default CustomPieChart