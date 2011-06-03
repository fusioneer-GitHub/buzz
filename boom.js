var boom = function( src, volume ) {
    this.volume = volume || 100;
    this.sound = document.createElement('audio');
    this.sound.setAttribute('src', src);

    this.play = function() {
        this.sound.play();
        return this;
    }
    this.stop = function() {
        this.sound.currentTime = 0;
        this.sound.pause();
        return this;
    }
    this.pause = function() {
        this.sound.pause();
        return this;
    }
    this.jump = function( time ) {
        this.setTime( time );
        return this;
    }
    this.toggle = function( ) {
        if ( this.sound.paused ) {
            this.sound.play();
        } else {
            this.sound.pause();
        }
        return this;
    }
    this.setVolume = function( volume ) {
        if ( volume > 100 ) {
            volume = 100;
        } 
        if ( volume < 0 ) {
            volume = 0;
        }
        this.volume = volume;
        this.sound.volume = volume / 100;
        return this;
    },
    this.getVolume = function() {
        return this.volume;
    }
    this.increaseVolume = function( value ) {
        this.setVolume( this.volume + ( value || 1 ) );
        return this;
    }
    this.decreaseVolume = function( value ) {
        this.setVolume( this.volume - ( value || 1 ) );
        return this;
    }
    this.setTime = function( time ) {
        this.sound.currentTime = time;
        return this;
    }
    this.getTime = function() {
        return Math.round( this.sound.currentTime * 100 ) / 100;
    }
    this.getDuration = function() {
        return Math.round( this.sound.duration * 100 ) / 100;
    }
    this.setPercent = function( time ) {
        this.sound.currentTime = this.sound.duration * time / 100;
        return this;
    }
    this.getPercent = function() {
        return Math.round( (this.sound.currentTime / this.sound.duration * 100 ) * 100) / 100;
    }
    this.get = function() {
        return this.sound;
    }
    this.bind = function( evt, func ) {
        this.sound.addEventListener( evt, func, true ); 
        return this;
    }
}