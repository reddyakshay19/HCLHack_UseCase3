export interface RoomResponseDto {
  id: number;
  totalRooms: number;
  roomType: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  amenities: string;
  imageUrl: string;
  isActive: boolean;
}

export interface CreateRoomDto {
  totalRooms: number;
  roomType: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  amenities: string;
  imageUrl: string;
}

export interface UpdateRoomDto {
  totalRooms?: number;
  roomType?: string;
  description?: string;
  pricePerNight?: number;
  maxGuests?: number;
  amenities?: string;
  imageUrl?: string;
  isActive?: boolean;
}

export interface RoomSearchDto {
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  numberOfRooms: number;
  roomType?: string;
  maxPricePerNight?: number;
}

export interface AvailableRoomDto {
  roomId: number;
  availableRooms: number;
  roomType: string;
  description: string;
  pricePerNight: number;
  totalPrice: number;
  numberOfNights: number;
  maxGuests: number;
  amenities: string;
  imageUrl: string;
}
