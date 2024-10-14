import React, { useState } from 'react';
import {
    Container,
    Typography,
    Button,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Slider,
    TextField,
} from '@mui/material';
import './index.scss';

const apartments = [
    {
        id: 1,
        type: "Однокомнатная квартира",
        description: "Уютная однокомнатная квартира в доме с видом на город.",
        floor: 1,
        area: 30,
        price: 5500000,
        status: "Квартира не забронирована",
        layoutImage: "https://st.hzcdn.com/simgs/d6e12a5f05615aac_14-6326/_.jpg"
      },
      {
        id: 2,
        type: "Двухкомнатная квартира",
        description: "Просторная двухкомнатная квартира в доме с видом на реку.",
        floor: 2,
        area: 50,
        price: 7000000,
        status: "Квартира не забронирована",
        layoutImage: "https://ufanovostroyka.ru/upload/iblock/9f3/9f30fb95095d83de312b352a49431c1d.png"
      },
      {
        id: 3,
        type: "Трехкомнатная квартира",
        description: "Комфортабельная трехкомнатная квартира в доме с видом на город.",
        floor: 3,
        area: 70,
        price: 9000000,
        status: "Квартира не забронирована",
        layoutImage: "https://example.com/image3.jpg"
      },
      {
        id: 4,
        type: "Однокомнатная квартира",
        description: "Светлая однокомнатная квартира в доме с видом на реку.",
        floor: 4,
        area: 35,
        price: 6000000,
        status: "Квартира не забронирована",
        layoutImage: "https://st.hzcdn.com/simgs/6941729b05615ab3_14-6326/_.jpg"
      },
      {
        id: 5,
        type: "Двухкомнатная квартира",
        description: "Квартира с ремонтом и мебелью в доме с видом на город.",
        floor: 5,
        area: 55,
        price: 7500000,
        status: "Квартира не забронирована",
        layoutImage: "https://example.com/image5.jpg"
      },
      {
        id: 6,
        type: "Трехкомнатная квартира",
        description: "Квартира с большой кухней в доме с видом на реку.",
        floor: 6,
        area: 80,
        price: 10000000,
        status: "Квартира не забронирована",
        layoutImage: "https://example.com/image6.jpg"
      },
      {
        id: 7,
        type: "Однокомнатная квартира",
        description: "Уютная однокомнатная квартира в доме с видом на парк.",
        floor: 7,
        area: 32,
        price: 5000000,
        status: "Квартира забронирована",
        layoutImage: "https://example.com/image7.jpg"
      },
      {
        id: 8,
        type: "Двухкомнатная квартира",
        description: "Квартира с двумя балконами в доме с видом на город.",
        floor: 8,
        area: 60,
        price: 8000000,
        status: "Квартира не забронирована",
        layoutImage: "https://example.com/image8.jpg"
      },
      {
        id: 9,
        type: "Трехкомнатная квартира",
        description: "Квартира в новом доме с видом на реку.",
        floor: 9,
        area: 90,
        price: 9500000,
        status: "Квартира не забронирована",
        layoutImage: "https://example.com/image9.jpg"
      },
      {
        id: 10,
        type: "Однокомнатная квартира",
        description: "Студия в спальном районе в доме с видом на город.",
        floor: 10,
        area: 28,
        price: 5200000,
        status: "Квартира забронирована",
        layoutImage: "https://example.com/image10.jpg"
      },
      {
        id: 11,
        type: "Двухкомнатная квартира",
        description: "Квартира с хорошей планировкой в доме с видом на реку.",
        floor: 11,
        area: 52,
        price: 7200000,
        status: "Квартира не забронирована",
        layoutImage: "https://example.com/image11.jpg"
      },
      {
        id: 12,
        type: "Трехкомнатная квартира",
        description: "Просторная квартира с террасой в доме с видом на город.",
        floor: 12,
        area: 85,
        price: 9800000,
        status: "Квартира не забронирована",
        layoutImage: "https://example.com/image12.jpg"
      },
];

const Dom1 = () => {
    const [roomCount, setRoomCount] = useState('');
    const [floor, setFloor] = useState('');
    const [areaRange, setAreaRange] = useState([0, 100]); // Диапазон площади
    const [maxPrice, setMaxPrice] = useState('');

    // Фильтрация квартир
    const filteredApartments = apartments.filter(apartment => {
        const matchesRoomCount = roomCount ? apartment.type === roomCount : true;
        const matchesFloor = floor ? apartment.floor === parseInt(floor) : true;
        const matchesArea = apartment.area >= areaRange[0] && apartment.area <= areaRange[1];
        const matchesPrice = maxPrice ? apartment.price <= maxPrice : true;

        return matchesRoomCount && matchesFloor && matchesArea && matchesPrice;
    });

    // Обработка изменения диапазона площади
    const handleAreaChange = (event, newValue) => {
        setAreaRange(newValue);
    };

    return (
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Typography variant="h2" align="center" gutterBottom>
                Дом №1 по адресу: ул. Врубеля, д. 1
            </Typography>

            {/* Форма фильтрации */}
            <Grid container spacing={2} sx={{ marginTop: 4 }}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Тип квартиры</InputLabel>
                        <Select
                            value={roomCount}
                            onChange={(e) => setRoomCount(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>Все</em>
                            </MenuItem>
                            <MenuItem value="Однокомнатная квартира">Однокомнатная квартира</MenuItem>
                            <MenuItem value="Двухкомнатная квартира">Двухкомнатная квартира</MenuItem>
                            <MenuItem value="Трехкомнатная квартира">Трехкомнатная квартира</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Этаж"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom>Диапазон площади</Typography>
                    <Slider
                        value={areaRange}
                        onChange={handleAreaChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={100}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Максимальная цена"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={() => {
                        setRoomCount('');
                        setFloor('');
                        setAreaRange([0, 100]);
                        setMaxPrice('');
                    }}>
                        Сбросить фильтры
                    </Button>
                </Grid>
            </Grid>

            {/* Список квартир */}
            <Grid container spacing={2} sx={{ marginTop: 4 }}>
                {filteredApartments.map(apartment => (
                    <Grid item xs={12} sm={6} md={4} key={apartment.id}>
                        <Container>
                            <Typography variant="h6">{apartment.type}</Typography>
                            <Typography variant="body2">{apartment.description}</Typography>
                            <Typography variant="body2">Этаж: {apartment.floor}</Typography>
                            <Typography variant="body2">Площадь: {apartment.area} м²</Typography>
                            <Typography variant="body2">Цена: {apartment.price} ₽</Typography>
                            <Typography variant="body2">Статус: {apartment.status}</Typography>
                            <a href={apartment.layoutImage} target="_blank" rel="noopener noreferrer">
                                <Button variant="outlined" sx={{ marginTop: 1 }}>Посмотреть планировку</Button>
                            </a>
                        </Container>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Dom1;
