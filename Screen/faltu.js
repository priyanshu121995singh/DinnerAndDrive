const [catagoriId, setCatagoriId] = useState([]);
// console.log("$$$$$$$$$$$$$$$$111222333", JSON.stringify(catagoriId))
useEffect(() => {
     GetCatagoriAPI()
}, [])

const GetCatagoriAPI = () => {

    Helper.showLoader()

    Helper.makeRequest({ url: GetcatagoriId, method: "GET" }).then((response) => {
         console.log("======>>>>>getApi-------->>>: ", JSON.stringify(response))




         if (response.success == true) {
              //    setfoodDetails(response.data.foodDetails)
              //    setnameCatagory(response.data.nameCategory)
              //   setdetails(response.data.details[0].additional_image_url)
              //   setrestaurentId(response.data.details[0]._id)
              //    // console.log("======>>>>>getApisffsfsfsfrsfsffd: ",response.data.details[0].additional_image_url.length)
              //    // console.log("======>>>>>getApisffsfsfsfrsfsffddetailsdetails ",details)
              //    setname(response.data.details[0])
              //    setfavorite(response.data.details[0].is_favorite)
              //    // set_id(response.data.foodDetails),
              setCatagoriId(response.data.groupedItems)
              Helper.hideLoader()
              Helper.showToast(response.message);

         } else {
              Helper.hideLoader()
              Helper.showToast(response.message);
         }
    })
         .catch((error) => {
              Helper.showToast(error);
         });

}


const FilterAPI = () => {
    var data = {
         categoryId: [catagoriId]
    }

    Helper.showLoader()
    Helper.makeRequest({ url: Filterapi, method: "POST", data: data }).then((response) => {
         console.log("---------: ", response)
         if (response.success == true) {
              navigation.navigate('MyTabs')
              Helper.hideLoader()
              Helper.showToast(response.message);
         } else {

              Helper.hideLoader()
              Helper.showToast(response.message);
         }
    })
         .catch(err => {
              Helper.showToast(err);
              Helper.hideLoader()

         });
}
const [color, setcolor] = useState(null)

     const selectColor = (id) => {
        // console.log("---------->>>>>>>>.", id)
        setcolor(id)

   }


const renderitem = ({ item, index }) => {
    return(
         <View style={{marginHorizontal:30,borderRadius:20,backgroundColor:"red"}}>
              <Text style={{color:"black"}}>
{item.name}
              </Text>
         </View>
    )
    // {
    //      item.foodItems.map(data => {
    //           console.log("----------->>>" , data.categoryId)
    //           return (



    //                <TouchableOpacity onPress={() => { selectColor(data.categoryId) }}
    //                     style={{ }}>
    //                     <View style={[, { color: color, backgroundColor: color == data.categoryId ? "white" : "lightblue" }]}>
    //                          <Text style={{ color: "black" }}>{data.food_name}</Text>
    //                     </View>
    //                </TouchableOpacity>
    //           )
    //      })
    // }
}



<View style={{ justifyContent: "center" }}>
<FlatList
     style={{ width: "100%" }}
     data={catagoriId}
     renderItem={renderitem}
     numColumns={2}
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{ marginHorizontal: 20 }}
/>
</View>
//   <TouchableOpacity onPress={()=>{if(color == 'black' && bgcolor == 'white')
//   {setcolor('white');setbgcolor('#33d5bb')}
//   else if(color == 'white' && bgcolor == '#33d5bb')
//   {setcolor('black');setbgcolor('white')}}}>
//     <View style={{marginRight:210,marginLeft:30,borderRadius:10,paddingVertical:10,backgroundColor:bgcolor,marginTop:40}}>
// <Text style={{textAlign:"center",fontSize:18,color:color,fontWeight:"500"}}>Top Rated</Text>
//     </View>
//     </TouchableOpacity>



