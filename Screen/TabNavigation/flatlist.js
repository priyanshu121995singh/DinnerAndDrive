data = [

    {
        id:'1',
    },
    {
        id:'2',
    },

     {
        id:'3',
    },
    {
        id:'4',
    },


]



const renderSalesReports = ({ item, index }) => {

    return (
        <View style={styles.cardView}>

            {data.map((item) => {
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Text>qawert</Text>
                    </View>
                )
            })}


        </View>
    )
};
