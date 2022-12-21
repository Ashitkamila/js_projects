<script>
        //geolocation
        //it has 3 methods clearWatch(), getCurrentPosition(), WatchPosition()
        // const func=(position)=>
        // {
        //     console.log(position);
        // }
        // let errorcode=(error)=>
        // {
        //     console.log(error);
        // }
        // navigator.geolocation.getCurrentPosition(func,errorcode)

        navigator.geolocation.getCurrentPosition(position=>console.log(position),err=>console.log(error))
    </script>