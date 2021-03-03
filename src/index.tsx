import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, Select, useUpdateWidgetProps, Modal, Loading, DataTable } from "uxp/components";
import './styles.scss';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { getDefaultCompilerOptions } from "typescript";
const CarParkIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3Mi44MDMiIGhlaWdodD0iNTUuMDI0IiB2aWV3Qm94PSIwIDAgNzIuODAzIDU1LjAyNCI+CiAgPGcgaWQ9Ikdyb3VwXzQwODYiIGRhdGEtbmFtZT0iR3JvdXAgNDA4NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NjYgLTUxMi45MzMpIiBvcGFjaXR5PSIwLjUiPgogICAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jYXIiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNhciIgZD0iTTU0LjAzNSwxNi42aC02LjQ3bC0xLjgtNC41QTEyLjA0MywxMi4wNDMsMCwwLDAsMzQuNTI5LDQuNUgyMC44QTEyLjA0NiwxMi4wNDYsMCwwLDAsOS41NjUsMTIuMTA4bC0xLjgsNC41SDEuM0ExLjMsMS4zLDAsMCwwLC4wNCwxOC4yMTZsLjY0OCwyLjU5NGExLjMsMS4zLDAsMCwwLDEuMjU4Ljk4Mkg0LjExNWE2Ljg2OCw2Ljg2OCwwLDAsMC0yLjM4Niw1LjE4OHY1LjE4OEE2Ljg2LDYuODYsMCwwLDAsMy40NTgsMzYuN3Y1Ljg0NEEzLjQ1OSwzLjQ1OSwwLDAsMCw2LjkxNyw0NmgzLjQ1OGEzLjQ1OSwzLjQ1OSwwLDAsMCwzLjQ1OC0zLjQ1OFYzOS4wODNINDEuNXYzLjQ1OEEzLjQ1OSwzLjQ1OSwwLDAsMCw0NC45NTgsNDZoMy40NThhMy40NTksMy40NTksMCwwLDAsMy40NTgtMy40NThWMzYuN0E2Ljg1Niw2Ljg1NiwwLDAsMCw1My42LDMyLjE2N1YyNi45NzlhNi44NzEsNi44NzEsMCwwLDAtMi4zODUtNS4xODhoMi4xNjlhMS4zLDEuMywwLDAsMCwxLjI1OC0uOTgybC42NDgtMi41OTRBMS4zLDEuMywwLDAsMCw1NC4wMzUsMTYuNlpNMTUuOTg3LDE0LjY3N0E1LjE4OCw1LjE4OCwwLDAsMSwyMC44LDExLjQxN0gzNC41MjlhNS4xODgsNS4xODgsMCwwLDEsNC44MTcsMy4yNjFMNDEuNSwyMC4wNjNIMTMuODMzbDIuMTU0LTUuMzg1Wk0xMC4zNzUsMzIuMTQ1QTMuMjYyLDMuMjYyLDAsMCwxLDYuOTE3LDI4LjdhMy4yNjIsMy4yNjIsMCwwLDEsMy40NTgtMy40NDhjMi4wNzUsMCw1LjE4OCwzLjEsNS4xODgsNS4xNzFTMTIuNDUsMzIuMTQ1LDEwLjM3NSwzMi4xNDVabTM0LjU4MywwYy0yLjA3NSwwLTUuMTg4LjM0NS01LjE4OC0xLjcyNHMzLjExMy01LjE3MSw1LjE4OC01LjE3MUEzLjI2MiwzLjI2MiwwLDAsMSw0OC40MTcsMjguN2EzLjI2MiwzLjI2MiwwLDAsMS0zLjQ1OCwzLjQ0OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1NjYgNTIxLjk1NikiLz4KICAgIDxwYXRoIGlkPSJJY29uX21hdGVyaWFsLXNob3ctY2hhcnQiIGRhdGEtbmFtZT0iSWNvbiBtYXRlcmlhbC1zaG93LWNoYXJ0IiBkPSJNNS42MiwyNy43ODksMTYuMSwxOC43NDlsNi45ODgsNi4wMTcsMTQuODQ5LTE0LjM4TDM1LjQ3Niw4LjI2NSwyMy4wOSwyMC4yNTMsMTYuMSwxNC4yMzYsMywyNS41MzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjAwLjg2NCA1MDQuNjY4KSIvPgogIDwvZz4KPC9zdmc+Cg==';
interface IWidgetProps {
    uxpContext?: IContextProvider;
    instanceId:string;
    carPark?:string;
}
interface IOccupant {
    tenant: string;
    vehicle: string;
    arrived: string;
}
const CarparkOccupancyWidget: React.FunctionComponent<IWidgetProps> = (props) => {
    let [carPark,setCarPark] = React.useState('');
    let [carparks,setCarParks] = React.useState([]);
    let [occupied,setOccupied] = React.useState<number|null>(null);
    let [total,setTotal] = React.useState(0);
    let [loadError,setLoadError] = React.useState('');

    let [loadingOccupants,setLoadingOccupants] = React.useState(false);

    let [showDialog,setShowDialog] = React.useState(false);

    let [occupants,setOccupants] = React.useState<IOccupant[]>([]);
    React.useEffect(()=>{
        props.uxpContext.executeAction('CarPark','GetCarParks',{},{json:true})
        .then((data:any[]) => {
            data.forEach(x => x.label = x.name);
            setCarParks(data);
            if (props.carPark) {
                setCarPark(props.carPark);
            }
        }).catch(e => {
            console.log('Error retrieving car parks',e);
        });
    },[]);
    React.useEffect(()=>{
        if (!carPark) {
            props.uxpContext.executeAction('CarPark','GetTotalOccupancy',{},{json:true})
            .then((data:any) => {
                setLoadError('');
                setOccupied(Number(data['occupancy']));
                setTotal(Number(data['capacity']));
            })
            .catch(e => {
                console.log('Error getting total carpark occupancy',e);
                setOccupied(null);
                setLoadError('Error getting total car park occupancy');
            });
            return;
        }
        let selectedCarPark = carparks.find(x => x.name == carPark);
        if (!selectedCarPark) {
            setOccupied(null);
            return;
        }

        props.uxpContext.executeAction('CarPark','GetOccupancy',{'name':carPark},{json:true})
        .then((data:any) => {
            setLoadError('');
            setOccupied(Number(data['occupancy']));
            setTotal(Number(selectedCarPark.capacity));

        })
        .catch(e => console.log('Error getting carpark occupancy',e));
        setOccupied(null);
        setTotal(0);
        setLoadError('No data for car park: ' + carPark);
    },[carPark]);
    let updater = useUpdateWidgetProps();
    function selectCarPark(cp:string) {
        setCarPark(cp);
        updater(props.instanceId,{'carPark':cp});
    }
    function getColor(entry:any) {
        if (entry.name=='Free') {
            return '#93DE93';
        }
        if (entry.name == 'Over Capacity') {
            return 'red';
        }
        return '#C2B6FD';
    }
    let overloaded = false;
    let data = [{name:'Free',value:total - occupied},{name:'Occupied',value:occupied}];

    if (total < occupied) {

        overloaded  = true;
        data[0].name = 'Over Capacity';
        data[0].value = occupied - total;
        data[1].name = 'Capacity';
        data[1].value = total;
    }

    function renderLoadError() {
        return <div style={{flex:1,textAlign:'center',color:'red'}}>{loadError}</div>
    }

    function loadOccupants() {
        setOccupants([]);
        setLoadingOccupants(true);
        let action = 'GetOccupants';

        if (!carPark) {
            action = 'GetAllOccupants';

        }
        props.uxpContext.executeAction('CarPark',action,{name:carPark},{json:true})
        .then((data:any)=>{
            setLoadingOccupants(false);
            debugger;
            let occupants:IOccupant[] = [];
            if (action == 'GetAllOccupants') {

                for(var i in data) {

                    if (!data[i] || !data[i].occupants) {
                        continue;
                    }

                    for(var o in data[i].occupants) {
                        occupants.push(data[i].occupants[o]);
                    }
                }

            }  else {

                if (data && data.occupants) {
                    occupants = data.occupants as IOccupant[];
                }
            }
            setOccupants(occupants.sort((x,y) =>Number(new Date(x.arrived)) - Number(new Date(y.arrived))));

        }).catch(e =>{
            setLoadingOccupants(false);
        });
    }

    function showCurrentOccupiedItems() {
        setShowDialog(true);
        loadOccupants();
    }

    function wedgeClick(item:any) {
        if (item.name == 'Occupied') {
            showCurrentOccupiedItems();
            return;
        }
    }
    function renderPie() {
        return <ResponsiveContainer width="100%" height="100%">
            <PieChart


            >

                <Legend verticalAlign="top" height={36} />
                <Pie

                    data={data}
                    label={true}
                      cx={'50%'}
                      cy={'50%'}
                    innerRadius={'55%'}
                    outerRadius={'85%'}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} onClick={(e)=>wedgeClick(entry)} fill={getColor(entry)} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>;
    }

    function renderModal() {
        if (!showDialog) return;
        return <Modal title={'Occupants'} show={showDialog} onClose={() => setShowDialog(false)} >
            {
                loadingOccupants?<Loading />:<div className='occupants'>
                    <DataTable data={occupants}  pageSize={1000} columns={[
                        {
                            title:'Tenant',
                            width:'50%',
                            renderColumn:(item:any) => item.tenant
                        },
                        {
                            title:'Vehicle',
                            width:'25%',
                            renderColumn:(item:any) => item.vehicle
                        },
                        {
                            title:'Arrived',
                            width:'25%',
                            renderColumn:(item:any) => new Date(item.arrived).toString()
                        }
                    ]} />
                </div>
            }
        </Modal>
    }
    return (
        <WidgetWrapper>
            <TitleBar icon={CarParkIcon} title={'Carpark Occupancy ' + (carPark?' - ' + carPark:' - Total')}>
                <FilterPanel>
                    <Select onChange={selectCarPark} options={[{name:'',label:'All Car Parks'},...carparks]} labelField={'label'} valueField={'name'} selected={carPark} />
                </FilterPanel>
            </TitleBar>
            
                {
                    loadError?
                    <div style={{flex:1,justifyContent:'center',alignItems:'center',display:'flex'}}>
                       {renderLoadError()}</div>:
                     <div className='carpark-chart' style={{flex:1}}>
                         {renderPie()}
                    </div>
               
                
                }
          {
              renderModal()
          }
        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "carpark-current-occupancy",
    name: "Carpark Occupancy",
    widget: CarparkOccupancyWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "carpark_analytics",
    label: "Carpark_analytics",
    // click: () => alert("Hello"),
    component: Carpark_analyticsWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"carpark_analytics",
    component: Carpark_analyticsWidget
});
*/